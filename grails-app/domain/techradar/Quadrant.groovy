package techradar


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Quadrant {
    String name

    String color

    static hasMany = [items: Item]

    static belongsTo = [radar:Radar]

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