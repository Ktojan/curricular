// implemented by Vladimir Agafonkin https://observablehq.com/@mourner/simple-web-map 

export const osmMap = (lng, lat, zoom, w = 600, h = 400) => {    
    let result = `<div style="width:${w}px;height:${h}px;position:relative;overflow:hidden; border:3px solid white; border-radius: 15px;">`,
      x = 256 * (1 << zoom) * (lng / 360 + 0.5) - w / 2 | 0,
      y = 256 * (1 << zoom) * (1 - Math.log(Math.tan(Math.PI * (0.25 + lat / 360))) / Math.PI) / 2 - h / 2 | 0;
    
    for (let ty = y / 256 | 0; ty * 256 < y + h; ty++)
      for (let tx = x / 256 | 0; tx * 256 < x + w; tx++) 
        result += `<img src="https://tile.osm.org/${zoom}/${tx}/${ty}.png" 
          style="position:absolute;left:${tx * 256 - x}px;top:${ty * 256 - y}px">`;
    
    return `${result}<div style="position:absolute;bottom:0;right:0;font:11px sans-serif;background:#fffa;padding:1px 5px">&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors</div></div>`;
  }
