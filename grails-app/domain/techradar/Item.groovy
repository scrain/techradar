package techradar


import grails.rest.*
import groovy.transform.Sortable

@Sortable(includes=['name','id'])
@Resource(readOnly = false, formats = ['json', 'xml'])
class Item {
    String name

    String movement

    String url

    Integer radialCoordinate
    Integer angularCoordinate

    static constraints = {
        name     unique: true, blank: false
        url      nullable: true
        movement blank: false, inList: ['t', 'c',]
        radialCoordinate()
        angularCoordinate()
    }

    static mapping = {
        sort: 'name'
    }
}