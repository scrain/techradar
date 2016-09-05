function polar_to_cartesian(r, t) {
    //radians to degrees, requires the t*pi/180
    var x = r * Math.cos((t * Math.PI / 180));
    var y = r * Math.sin((t * Math.PI / 180));
    return [x, y];
}

function cartesian_to_raster(x, y, h, w) {
    var rx = w / 2 + x;
    var ry = h / 2 + y;
    return [rx, ry];
}

function polar_to_raster(r, t, h, w) {
    var xy = polar_to_cartesian(r, t);
    return cartesian_to_raster(xy[0], xy[1], h, w);
}

