package techradar

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class RadarController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Radar.list(params), model:[radarCount: Radar.count()]
    }

    def show(Radar radar) {
        respond radar
    }

    def showData(Radar radar) {
        respond radar, view: 'showData'
    }

    @Transactional
    def save(Radar radar) {
        if (radar == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (radar.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond radar.errors, view:'create'
            return
        }

        radar.save flush:true

        respond radar, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Radar radar) {
        if (radar == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (radar.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond radar.errors, view:'edit'
            return
        }

        radar.save flush:true

        respond radar, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Radar radar) {

        if (radar == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        radar.delete flush:true

        render status: NO_CONTENT
    }
}
