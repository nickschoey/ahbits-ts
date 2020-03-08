import React from 'react';
import { fetchTodos, Todo } from '../actions/index';
import { StoreState } from '../reducers/index';
import { connect } from 'react-redux';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  componentDidMount() {}

  render() {
    return <div>Hello</div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
