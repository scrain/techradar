package techradar


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Item {
    String name

    String movement

    Integer radialCoordinate
    Integer angularCoordinate

    static belongsTo = [quadrant: Quadrant]

    static constraints = {
        name     unique: true, blank: false
        movement blank: false, inList: ['a', 't', 'c', 'h']
        radialCoordinate()
        angularCoordinate()
        quadrant()
    }

    static mapping = {
        sort: 'name'
    }
}