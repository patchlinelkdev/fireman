import React from 'react';

const RememberMeCheck = () => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="rememberMe" className="text-xs">
        Remember Me
      </label>
      <input
        type="checkbox"
        id="rememberMe"
        className="w-4 h-4 rounded"
      />
    </div>
  );
};

export default RememberMeCheck;
