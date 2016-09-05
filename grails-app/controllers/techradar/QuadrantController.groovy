package techradar

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class QuadrantController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Quadrant.list(params), model:[quadrantCount: Quadrant.count()]
    }

    def show(Quadrant quadrant) {
        respond quadrant
    }

    @Transactional
    def save(Quadrant quadrant) {
        if (quadrant == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (quadrant.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond quadrant.errors, view:'create'
            return
        }

        quadrant.save flush:true

        respond quadrant, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Quadrant quadrant) {
        if (quadrant == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (quadrant.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond quadrant.errors, view:'edit'
            return
        }

        quadrant.save flush:true

        respond quadrant, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Quadrant quadrant) {

        if (quadrant == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        quadrant.delete flush:true

        render status: NO_CONTENT
    }
}
