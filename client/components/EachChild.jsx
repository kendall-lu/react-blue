import React, { useState } from 'react';
/**
 *  Each Child Display: 
 *  Creates a child for Each child of the parent node
 *  component or container(toggle button to change its attribute)
 *  template dropdown feature, choose a template
 *  delete current component 
 */
const EachChild = ({
  initiailName,
  name,
  childId,
  isContainer,
  renameChild,
  changeType,
  deleteChild,
  state,
  recentTimeoutId,
  setTimeoutId,
  checkID_ClearAndSetTimeout,
  showSubTree,
  currentlyDisplayedSubTreeId
}) => (
    <div className='each-child'>
      <input
        className='child-name'
        type='text'
        key={`initialName:${initiailName || name}`}
        defaultValue={initiailName || name}
        onBlur={() => {
          renameChild(event, childId);
          showSubTree(currentlyDisplayedSubTreeId);
          checkID_ClearAndSetTimeout(setTimeoutId, recentTimeoutId, state);
        }}

      ></input>
      <div>
        <input
          className='container-checkbox'
          type='checkbox'
          checked={isContainer}
          onChange={() => {
            changeType(event, childId);
            showSubTree(currentlyDisplayedSubTreeId);
            checkID_ClearAndSetTimeout(setTimeoutId, recentTimeoutId, state);
          }}
        />
        <span className='container-label'>Container</span>
      </div>
      <button className='delete-child' onClick={() => {
        deleteChild(childId);
        showSubTree(currentlyDisplayedSubTreeId);
        checkID_ClearAndSetTimeout(setTimeoutId, recentTimeoutId, state);
      }}>
        <i className='far fa-minus-square'></i>
      </button>
    </div>
  );

export default EachChild;
