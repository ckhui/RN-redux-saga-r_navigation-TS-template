import { Dispatch, Action, AnyAction } from 'redux';

export interface ConnectedReduxProps<S extends Action = AnyAction> {
    // Correct types for the `dispatch` prop passed by `react-redux`.
    // Additional type information is given through generics.
    dispatch: Dispatch<S>;
  }