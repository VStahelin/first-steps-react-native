export default props => {
  if (props.valid) {
    return props.children;
  } else {
    return false;
  }
};
