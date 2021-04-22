import { put, call } from 'redux-saga/effects';
import { setDataAction, setErrorAction } from '../actions/data';
import { DataModel } from '../types/Models';

function* fetchData() {
  const dataUrl = process.env.REACT_APP_DATA_URL as string;

  const data: DataModel | string = yield call(async () => {
    try {
      const res = await fetch(dataUrl);

      if (!res.ok) {
        return 'External resource returned an invalid status code.';
      }

      const data = await res.json();

      if (
        typeof data !== 'object' ||
        !Array.isArray(data.videos) ||
        !Array.isArray(data.genres)
      ) {
        return 'External resource returned an invalid response.';
      }

      return data;
    } catch (e) {
      return 'Unexpected exception: ' + e;
    }
  });

  if (typeof data === 'string') {
    yield put(setErrorAction(data));
  } else {
    yield put(setDataAction(data));
  }
}

export function* root() {
  yield call(() => fetchData());
}
