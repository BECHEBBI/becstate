import React, { useState, useEffect } from 'react';

const MountedTime = () => {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec(sec => sec + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
      <p style={{color:'#343AA2'}}>
        Component mounted <strong>{sec}</strong> seconds ago.
      </p>
  );
};

export default MountedTime;