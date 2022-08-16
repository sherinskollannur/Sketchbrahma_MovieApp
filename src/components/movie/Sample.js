import React, { useEffect, useState } from 'react';

function Sample() {
  const [addCount, SetAddCount] = useState(0);

  useEffect(() => {
    console.log(addCount);
  }, [addCount]);

  useEffect(() => {
    console.log('first run');
    setTimeout(() => {
      SetAddCount((state) => state + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <p>{addCount}</p>
    </div>
  );
}

export default Sample;
