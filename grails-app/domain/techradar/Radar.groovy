package techradar


import grails.rest.*
import groovy.transform.Sortable

@Sortable(includes=['name','id'])
@Resource(readOnly = false, formats = ['json', 'xml'])
class Radar {
    String name

    SortedSet quadrants

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