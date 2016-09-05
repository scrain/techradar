//This is the concentic circles that want on your radar
var radar_arcs = [
    {'r': 100, 'name': 'Adopt'},
    {'r': 200, 'name': 'Trial'},
    {'r': 300, 'name': 'Assess'},
    {'r': 400, 'name': 'Hold'} // ,{'r':500,'name':'Possible Extra if you want it'}
];

function init(h, w, radar_data) {
    var quad = [
        {'left': 45,        'top': 18},
        {'left': w-200+30,  'top': 18},
        {'left': 45,        'top': h/2 + 18},
        {'left': w-200+30,  'top': h/2 + 18}
    ]

    var radar = new pv.Panel()
        .width(w)
        .height(h)
        .canvas('radar')

// arcs
    radar.add(pv.Dot)
        .data(radar_arcs)
        .left(w / 2)
        .bottom(h / 2)
        .radius(function (d) {
            return d.r;
        })
        .strokeStyle("#ccc")
        .anchor("top")
        .add(pv.Label).text(function (d) {
        return d.name;
    });

//quadrant lines -- vertical
    radar.add(pv.Line)
        .data([(h / 2 - radar_arcs[radar_arcs.length - 1].r), h - (h / 2 - radar_arcs[radar_arcs.length - 1].r)])
        .lineWidth(1)
        .left(w / 2)
        .bottom(function (d) {
            return d;
        })
        .strokeStyle("#bbb");

//quadrant lines -- horizontal 
    radar.add(pv.Line)
        .data([(w / 2 - radar_arcs[radar_arcs.length - 1].r), w - (w / 2 - radar_arcs[radar_arcs.length - 1].r)])
        .lineWidth(1)
        .bottom(h / 2)
        .left(function (d) {
            return d;
        })
        .strokeStyle("#bbb");


//Quadrant Ledgends
    var radar_quadrant_ctr = 1;
    var quadrantFontSize = 18;
    var headingFontSize = 14;
    var stageHeadingCount = 0;
    var lastRadius = 0;
    var lastQuadrant = '';
    var spacer = 6;
    var fontSize = 10;
    var total_index = 1;


//TODO: Super fragile: re-order the items, by radius, in order to logically group by the rings.
    for (var i = 0; i < radar_data.quadrants.length; i++) {
        //adjust top by the number of headings.
        if (lastQuadrant != radar_data.quadrants[i].quadrant) {
            radar.add(pv.Label)
                .left(quad[i].left)
                .top(quad[i].top)
                .text(radar_data.quadrants[i].quadrant)
                .strokeStyle(radar_data.quadrants[i].color)
                .fillStyle(radar_data.quadrants[i].color)
                .font(quadrantFontSize + "px sans-serif");

            lastQuadrant = radar_data.quadrants[i].quadrant;

        }

        // group items by stage based on how far they are from each arc
        var itemsByStage = _.groupBy(radar_data.quadrants[i].items, function (item) {
            console.log('item: ' + item.name + ' (' + item.pc.r + ',' + item.pc.t + ')');
            for (var arc_i = 0; arc_i < radar_arcs.length; arc_i++) {
                if (item.pc.r < radar_arcs[arc_i].r) {
                    return arc_i;
                }
            }
            return 0;
        });

        var offsetIndex = 0;
        for (var stageIdx in _(itemsByStage).keys()) {

            if (stageIdx > 0) {
                offsetIndex = offsetIndex + itemsByStage[stageIdx - 1].length + 1;
                console.log("offsetIndex = " + itemsByStage[stageIdx - 1].length, offsetIndex);
            }

            radar.add(pv.Label)
                .left(quad[i].left + headingFontSize)
                .top(quad[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + (offsetIndex * fontSize))
                .text(radar_arcs[stageIdx].name)
                .strokeStyle('#cccccc')
                .fillStyle('#cccccc')
                .font(headingFontSize + "px Courier New");

            radar.add(pv.Label)
                .left(quad[i].left)
                .top(quad[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + (offsetIndex * fontSize))
                .strokeStyle(radar_data.quadrants[i].color)
                .fillStyle(radar_data.quadrants[i].color)
                .add(pv.Dot)
                .def("i", quad[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + spacer + (offsetIndex * fontSize))
                .data(itemsByStage[stageIdx])
                .top(function () {
                    return ( this.i() + (this.index * fontSize) );
                })
                .shape(function (d) {
                    return (d.movement === 't' ? "triangle" : "circle");
                })
                .cursor(function (d) {
                    return ( d.url !== undefined ? "pointer" : "auto" );
                })
                .event("click", function (d) {
                    if (d.url !== undefined) {
                        self.location = d.url
                    }
                })
                .size(fontSize)
                .angle(45)
                .anchor("right")
                .add(pv.Label)
                .text(function (d) {
                    return radar_quadrant_ctr++ + ". " + d.name;
                });

            radar.add(pv.Dot)
                .def("active", false)
                .data(itemsByStage[stageIdx])
                .size(function (d) {
                    return ( d.blipSize !== undefined ? d.blipSize : 70 );
                })
                .left(function (d) {
                    var x = polar_to_raster(d.pc.r, d.pc.t, h, w)[0];
                    console.log("name:" + d.name + ", x:" + x);
                    return x;
                })
                .bottom(function (d) {
                    var y = polar_to_raster(d.pc.r, d.pc.t, h, w)[1];
                    console.log("name:" + d.name + ", y:" + y);
                    return y;
                })
                .title(function (d) {
                    return d.name;
                })
                .cursor(function (d) {
                    return ( d.url !== undefined ? "pointer" : "auto" );
                })
                .event("click", function (d) {
                    if (d.url !== undefined) {
                        self.location = d.url
                    }
                })
                .angle(Math.PI)  // 180 degrees in radians !
                .strokeStyle(radar_data.quadrants[i].color)
                .fillStyle(radar_data.quadrants[i].color)
                .shape(function (d) {
                    return (d.movement === 't' ? "triangle" : "circle");
                })
                .anchor("center")
                .add(pv.Label)
                .text(function (d) {
                    return total_index++;
                })
                .textBaseline("middle")
                .textStyle("white");
        }
    }

    radar.anchor('radar');
    radar.render();

};
