package techradar


import grails.rest.*
import groovy.transform.Sortable

@Sortable(includes=['name','id'])
@Resource(readOnly = false, formats = ['json', 'xml'])
class Quadrant {
    String name

    String color

    SortedSet items

    static hasMany = [items: Item]

    static constraints = {
        name  unique: true, blank: false
        color blank: false
        items()
    }

    static fetchMode = [items: 'eager']

    static mapping = {
        sort: 'name'
    }
}