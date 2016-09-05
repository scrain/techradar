package techradar


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Radar {
    String name

    static hasMany = [quadrants: Quadrant]

    static constraints = {
        name unique: true, blank: false
        quadrants()
    }

    static fetchMode = [quadrants: 'eager']

    static mapping = {
        sort: 'name'
    }
}