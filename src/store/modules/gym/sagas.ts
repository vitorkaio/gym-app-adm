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
  editExerciseSuccess,
  editExerciseError,
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
  EditExerciseAction,
} from './types';
import FormatErrors, {ERRORS} from 'services/FormatErrors';

function* usersRequestLoad() {
  try {
    const users: User[] = yield call(GymApi.getUsers);
    yield put(userSuccess(users));
  } catch (err) {
    console.log(err);
    yield put(userError(FormatErrors.format(err)));
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
        yield put(createUserError(FormatErrors.format(ERRORS.errServer)));
      }
    } else {
      yield put(createUserError(FormatErrors.format(ERRORS.errServer)));
    }
  } catch (error) {
    yield put(createUserError(FormatErrors.format(error)));
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
        yield put(removeUserError(FormatErrors.format(ERRORS.errServer)));
      }
    } else {
      yield put(removeUserError(FormatErrors.format(ERRORS.errServer)));
    }
  } catch (error) {
    yield put(removeUserError(FormatErrors.format(error)));
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
        yield put(
          updateAddTrainingUserError(FormatErrors.format(ERRORS.errServer)),
        );
      }
    } else {
      yield put(
        updateAddTrainingUserError(FormatErrors.format(ERRORS.errServer)),
      );
    }
  } catch (error) {
    yield put(updateAddTrainingUserError(FormatErrors.format(error)));
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
        yield put(
          removeTrainingUserError(FormatErrors.format(ERRORS.errServer)),
        );
      }
    } else {
      yield put(removeTrainingUserError(FormatErrors.format(ERRORS.errServer)));
    }
  } catch (error) {
    yield put(removeTrainingUserError(FormatErrors.format(error)));
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
        yield put(
          addExerciseTrainingError(FormatErrors.format(ERRORS.errServer)),
        );
      }
    } else {
      yield put(
        addExerciseTrainingError(FormatErrors.format(ERRORS.errServer)),
      );
    }
  } catch (error) {
    yield put(addExerciseTrainingError(FormatErrors.format(error)));
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
        yield put(
          removeExerciseTrainingError(FormatErrors.format(ERRORS.errServer)),
        );
      }
    } else {
      yield put(
        removeExerciseTrainingError(FormatErrors.format(ERRORS.errServer)),
      );
    }
  } catch (error) {
    yield put(removeExerciseTrainingError(FormatErrors.format(error)));
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
        yield put(editUserError(FormatErrors.format(ERRORS.errServer)));
      }
    } else {
      yield put(editUserError(FormatErrors.format(ERRORS.errServer)));
    }
  } catch (error) {
    yield put(editUserError(FormatErrors.format(error)));
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
        yield put(editTrainingError(FormatErrors.format(ERRORS.errServer)));
      }
    } else {
      yield put(editTrainingError(FormatErrors.format(ERRORS.errServer)));
    }
  } catch (error) {
    yield put(editTrainingError(FormatErrors.format(error)));
  }
}

function* editExercise(action: EditExerciseAction) {
  const {payload} = action;
  try {
    const training: Training = yield call(
      GymApi.editExercise,
      payload.idTraining,
      payload.idExercise,
      payload.exercise,
    );
    if (training) {
      const users: User[] = yield call(GymApi.getUsers);
      if (users) {
        yield put(editExerciseSuccess(users));
      } else {
        yield put(editExerciseError(FormatErrors.format(ERRORS.errServer)));
      }
    } else {
      yield put(editExerciseError(FormatErrors.format(ERRORS.errServer)));
    }
  } catch (error) {
    yield put(editExerciseError(FormatErrors.format(error)));
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
  takeLatest(GymTypes.EDIT_EXERCISE_REQUEST, editExercise),
];
