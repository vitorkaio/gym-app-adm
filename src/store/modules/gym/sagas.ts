import {call, put, takeLatest} from 'redux-saga/effects';
import GymApi from 'services/GymApi';

import User, {Training} from 'models/User';
import {
  userSuccess,
  userError,
  createUserSuccess,
  createUserError,
  removeUserSuccess,
  removeUserError,
  updateAddTrainingUserSuccess,
  updateAddTrainingUserError,
  removeTrainingUserSuccess,
  removeTrainingUserError,
  addExerciseTrainingSuccess,
  addExerciseTrainingError,
  removeExerciseTrainingSuccess,
  removeExerciseTrainingError,
  editUserSuccess,
  editUserError,
  editTrainingSuccess,
  editTrainingError,
} from './actions';
import {
  GymTypes,
  CreateUserAction,
  RemoveUserAction,
  UpdateAddTrainingUserAction,
  RemoveTrainingUserAction,
  AddExerciseTrainingAction,
  RemoveExerciseTrainingAction,
  EditUserAction,
} from './types';

function* usersRequestLoad() {
  try {
    const users: User[] = yield call(GymApi.getUsers);
    yield put(userSuccess(users));
  } catch (err) {
    yield put(userError());
  }
}

function* createUserLoad(action: CreateUserAction) {
  const {payload} = action;
  try {
    const user: User = yield call(GymApi.createUser, payload.newUser);
    if (user) {
      const users: User[] = yield call(GymApi.getUsers);
      if (users) {
        yield put(createUserSuccess(users));
      } else {
        yield put(createUserError('error'));
      }
    } else {
      yield put(createUserError('error'));
    }
  } catch (error) {
    yield put(createUserError('error'));
  }
}

function* removeUserLoad(action: RemoveUserAction) {
  const {payload} = action;
  try {
    const user: User = yield call(GymApi.removeUser, payload.id);
    if (user) {
      const users: User[] = yield call(GymApi.getUsers);
      if (users) {
        yield put(removeUserSuccess(users));
      } else {
        yield put(removeUserError('error'));
      }
    } else {
      yield put(removeUserError('error'));
    }
  } catch (error) {
    yield put(removeUserError('error'));
  }
}

function* updateAddTrainingUser(action: UpdateAddTrainingUserAction) {
  const {payload} = action;
  try {
    const user: User = yield call(
      GymApi.addTrainingUser,
      payload.id,
      payload.name,
    );
    if (user) {
      const users: User[] = yield call(GymApi.getUsers);
      if (users) {
        yield put(updateAddTrainingUserSuccess(users));
      } else {
        yield put(updateAddTrainingUserError('error'));
      }
    } else {
      yield put(updateAddTrainingUserError('error'));
    }
  } catch (error) {
    yield put(updateAddTrainingUserError('error'));
  }
}

function* removeTrainingUser(action: RemoveTrainingUserAction) {
  const {payload} = action;
  try {
    const user: User = yield call(
      GymApi.removeTrainingUser,
      payload.idUser,
      payload.idTraining,
    );
    if (user) {
      const users: User[] = yield call(GymApi.getUsers);
      if (users) {
        yield put(removeTrainingUserSuccess(users));
      } else {
        yield put(removeTrainingUserError('error'));
      }
    } else {
      yield put(removeTrainingUserError('error'));
    }
  } catch (error) {
    yield put(removeTrainingUserError('error'));
  }
}

function* addExerciseTraining(action: AddExerciseTrainingAction) {
  const {payload} = action;
  try {
    const user: User = yield call(
      GymApi.addExerciseTraining,
      payload.idTraining,
      payload.exercise,
    );
    if (user) {
      const users: User[] = yield call(GymApi.getUsers);
      if (users) {
        yield put(addExerciseTrainingSuccess(users));
      } else {
        yield put(addExerciseTrainingError('error'));
      }
    } else {
      yield put(addExerciseTrainingError('error'));
    }
  } catch (error) {
    yield put(addExerciseTrainingError('error'));
  }
}

function* removeExerciseTraining(action: RemoveExerciseTrainingAction) {
  const {payload} = action;
  try {
    const user: User = yield call(
      GymApi.removeExerciseTraining,
      payload.idTraining,
      payload.idExercise,
    );
    if (user) {
      const users: User[] = yield call(GymApi.getUsers);
      if (users) {
        yield put(removeExerciseTrainingSuccess(users));
      } else {
        yield put(removeExerciseTrainingError('error'));
      }
    } else {
      yield put(removeExerciseTrainingError('error'));
    }
  } catch (error) {
    yield put(removeExerciseTrainingError('error'));
  }
}

function* editUser(action: EditUserAction) {
  const {payload} = action;
  try {
    const user: User = yield call(GymApi.editUser, payload.id, payload.user);
    if (user) {
      const users: User[] = yield call(GymApi.getUsers);
      if (users) {
        yield put(editUserSuccess(users));
      } else {
        yield put(editUserError('error'));
      }
    } else {
      yield put(editUserError('error'));
    }
  } catch (error) {
    yield put(editUserError('error'));
  }
}

function* editTraining(action: UpdateAddTrainingUserAction) {
  const {payload} = action;
  try {
    const training: Training = yield call(
      GymApi.editTraining,
      payload.id,
      payload.name,
    );
    if (training) {
      const users: User[] = yield call(GymApi.getUsers);
      if (users) {
        yield put(editTrainingSuccess(users));
      } else {
        yield put(editTrainingError('error'));
      }
    } else {
      yield put(editTrainingError('error'));
    }
  } catch (error) {
    yield put(editTrainingError('error'));
  }
}

export default [
  takeLatest(GymTypes.USER_REQUEST, usersRequestLoad),
  takeLatest(GymTypes.CREATE_USER_REQUEST, createUserLoad),
  takeLatest(GymTypes.REMOVE_USERS_REQUEST, removeUserLoad),
  takeLatest(GymTypes.UPDATE_ADD_TRAINING_USER_REQUEST, updateAddTrainingUser),
  takeLatest(GymTypes.REMOVE_TRAINING_USER_REQUEST, removeTrainingUser),
  takeLatest(GymTypes.ADD_EXERCISE_TRAINING_REQUEST, addExerciseTraining),
  takeLatest(GymTypes.REMOVE_EXERCISE_TRAINING_REQUEST, removeExerciseTraining),
  takeLatest(GymTypes.EDIT_USER_REQUEST, editUser),
  takeLatest(GymTypes.EDIT_TRAINING_REQUEST, editTraining),
];
