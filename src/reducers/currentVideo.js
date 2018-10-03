import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (state === null) {
    return state;
  }
  
  switch (action.type) {

  case 'CHANGE_VIDEO':
    outputObj.currentVideo = action.video;
    return outputObj;
    
  default:
    return state;
  }
};

export default currentVideoReducer;
