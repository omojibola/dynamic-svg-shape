import React, { useState } from 'react';

const SvgElement = () => {
  const [isShow, setIsShow] = useState(false);
  const [shapeName, setShapeName] = useState('');
  const [lenght, setLenght] = useState('');
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    const shapeName = e.target.value;
    setShapeName(shapeName);
  };

  const handleLenghtChange = (e) => {
    const lenght = e.target.value;
    setLenght(lenght);
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    setColor(color);
  };

  const renderShape = () => {
    if (shapeName === 'rect') {
      return (
        <svg>
          <rect
            style={{
              width: lenght,
              height: '100',
              fill: color,
              stroke: 'rgb(0,0,0)',
            }}
          />
        </svg>
      );
    }

    if (shapeName === 'square') {
      return (
        <svg>
          <rect
            style={{
              width: lenght,
              height: lenght,
              fill: color,
              stroke: 'rgb(0,0,0)',
            }}
          />
        </svg>
      );
    }

    if (shapeName === 'circle') {
      return (
        <svg>
          <circle
            style={{
              cx: parseInt(lenght) + 20,
              cy: parseInt(lenght) + 20,
              r: lenght,
              fill: color,
            }}
          />
        </svg>
      );
    }
  };

  const drawShape = () => {
    setIsShow({ isShow: true });
    // setTimeout(() => {
    //   setShapeName('');
    //   setLenght('');
    //   setColor('');
    // }, 3500);
  };

  let res = renderShape();

  return (
    <div>
      <form>
        <div>
          <span> Pick A Shape </span>
          <select
            onChange={handleChange}
            type="text"
            name="shapeName"
            value={shapeName}
            required
          >
            <option value="" style={{ color: '#e5e5e5' }}>
              E.g rectangle
            </option>
            <option value="rect">Rectangle</option>
            <option value="circle">Circle</option>
            <option value="square">Square</option>
            <option value="ellipse">Ellipse</option>
            <option value="polygon">Polygon</option>
          </select>
        </div>
        <div>
          <span> Input Length / Radius </span>
          <input
            type="text"
            required
            onChange={handleLenghtChange}
            value={lenght}
          />
        </div>
        <div>
          <span> Input Color (Optional) </span>
          <input type="text" onChange={handleColorChange} value={color} />
        </div>
      </form>
      <button type="submit" onClick={drawShape}>
        Draw
      </button>
      {isShow && res}
    </div>
  );
};

export default SvgElement;
