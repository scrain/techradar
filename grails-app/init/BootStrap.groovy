import techradar.Item
import techradar.Quadrant
import techradar.Radar

class BootStrap {
    def init = { servletContext ->

        Quadrant techniques = new Quadrant(name: "Techniques", color: '#8FA227').save(failOnError: true)
        Quadrant tools      = new Quadrant(name: "Tools",      color: '#587486').save(failOnError: true)
        Quadrant platforms  = new Quadrant(name: "Platforms",  color: '#DC6F1D').save(failOnError: true)
        Quadrant languages  = new Quadrant(name: "Languages",  color: '#B70062').save(failOnError: true)

        Radar myRadar = new Radar(
            name: "Thoughtworks Technology Radar",
            quadrants: [techniques, tools, platforms, languages]
        ).save(failOnError: true)

        techniques.addToItems new Item(name: 'Database based Integration', radialCoordinate: 350, angularCoordinate: 135, movement: 't').save(failOnError: true)
        techniques.addToItems new Item(name: 'Scrum certification', radialCoordinate: 350, angularCoordinate: 95, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Incremental data warehousing', radialCoordinate: 250, angularCoordinate: 165, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'DevOps', radialCoordinate: 250, angularCoordinate: 110, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Polygot Programming', radialCoordinate: 180, angularCoordinate: 170, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Automation of technical tests', radialCoordinate: 180, angularCoordinate: 155, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Capability modelling', radialCoordinate: 180, angularCoordinate: 125, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Service choreography', radialCoordinate: 180, angularCoordinate: 105, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Continuous deployment', radialCoordinate: 180, angularCoordinate: 100, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Evolutionary architecture', radialCoordinate: 120, angularCoordinate: 95, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Coding architects', radialCoordinate: 90, angularCoordinate: 170, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Visualisation and metrics', radialCoordinate: 80, angularCoordinate: 150, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Web as platform', radialCoordinate: 80, angularCoordinate: 110, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Emergent design', radialCoordinate: 80, angularCoordinate: 100, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Evolutionary database', radialCoordinate: 70, angularCoordinate: 170, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Platform roadmaps', radialCoordinate: 30, angularCoordinate: 100, movement: 'c').save(failOnError: true)
        techniques.addToItems new Item(name: 'Build pipelines', radialCoordinate: 30, angularCoordinate: 160, movement: 'c').save(failOnError: true)

        tools.addToItems new Item(name: 'ESB', radialCoordinate: 390, angularCoordinate: 20, movement: 't').save(failOnError: true)
        tools.addToItems new Item(name: 'Intentional Programming', radialCoordinate: 310, angularCoordinate: 10, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'Cross mobile platforms', radialCoordinate: 280, angularCoordinate: 85, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'Github', radialCoordinate: 280, angularCoordinate: 70, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'Restfulie', radialCoordinate: 280, angularCoordinate: 50, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'RDF triple stores', radialCoordinate: 280, angularCoordinate: 30, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'Apache camel', radialCoordinate: 180, angularCoordinate: 85, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'Next gen test tools', radialCoordinate: 180, angularCoordinate: 75, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'NoSQL', radialCoordinate: 180, angularCoordinate: 65, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'Neo4j', radialCoordinate: 180, angularCoordinate: 50, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'Message busses without smarts', radialCoordinate: 160, angularCoordinate: 85, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'Puppet', radialCoordinate: 130, angularCoordinate: 85, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'mongoDB', radialCoordinate: 130, angularCoordinate: 55, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'Mercurial', radialCoordinate: 130, angularCoordinate: 30, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'Git', radialCoordinate: 130, angularCoordinate: 15, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'Squid', radialCoordinate: 80, angularCoordinate: 85, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'ASP.NET MVC', radialCoordinate: 80, angularCoordinate: 10, movement: 'c').save(failOnError: true)
        tools.addToItems new Item(name: 'Subversion', radialCoordinate: 30, angularCoordinate: 30, movement: 'c').save(failOnError: true)

        platforms.addToItems new Item(name: 'Rich internet applications', radialCoordinate: 390, angularCoordinate: 265, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'GWT', radialCoordinate: 390, angularCoordinate: 250, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'IE8', radialCoordinate: 390, angularCoordinate: 230, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'WS-* beyond basic profile', radialCoordinate: 390, angularCoordinate: 190, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'Azure', radialCoordinate: 290, angularCoordinate: 265, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'Mobile Web', radialCoordinate: 275, angularCoordinate: 260, movement: 't').save(failOnError: true)
        platforms.addToItems new Item(name: 'Google App Engine', radialCoordinate: 290, angularCoordinate: 255, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'Application appliances', radialCoordinate: 190, angularCoordinate: 245, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'Google as corporate platform', radialCoordinate: 290, angularCoordinate: 200, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'GPGPU', radialCoordinate: 190, angularCoordinate: 185, movement: 't').save(failOnError: true)
        platforms.addToItems new Item(name: 'App containers', radialCoordinate: 250, angularCoordinate: 260, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'OAuth', radialCoordinate: 130, angularCoordinate: 260, movement: 't').save(failOnError: true)
        platforms.addToItems new Item(name: 'RDFa', radialCoordinate: 130, angularCoordinate: 250, movement: 't').save(failOnError: true)
        platforms.addToItems new Item(name: 'Location based services', radialCoordinate: 130, angularCoordinate: 230, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'iPad', radialCoordinate: 130, angularCoordinate: 220, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'EC2 & S3', radialCoordinate: 190, angularCoordinate: 250, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'Facebook as a business platform', radialCoordinate: 190, angularCoordinate: 190, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'JVM as platform', radialCoordinate: 90, angularCoordinate: 265, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'iPhone', radialCoordinate: 90, angularCoordinate: 215, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'Android', radialCoordinate: 90, angularCoordinate: 190, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'KVM', radialCoordinate: 70, angularCoordinate: 260, movement: 't').save(failOnError: true)
        platforms.addToItems new Item(name: 'Atom', radialCoordinate: 70, angularCoordinate: 245, movement: 't').save(failOnError: true)
        platforms.addToItems new Item(name: 'ALT.NET', radialCoordinate: 90, angularCoordinate: 190, movement: 'c').save(failOnError: true)
        platforms.addToItems new Item(name: 'IE6 End of Life', radialCoordinate: 30, angularCoordinate: 225, movement: 'c').save(failOnError: true)

        languages.addToItems new Item(name: 'Java language end of life', radialCoordinate: 290, angularCoordinate: 355, movement: 'c').save(failOnError: true)
        languages.addToItems new Item(name: 'F#', radialCoordinate: 270, angularCoordinate: 330, movement: 'c').save(failOnError: true)
        languages.addToItems new Item(name: 'Scala', radialCoordinate: 290, angularCoordinate: 320, movement: 'c').save(failOnError: true)
        languages.addToItems new Item(name: 'Clojure', radialCoordinate: 260, angularCoordinate: 310, movement: 'c').save(failOnError: true)
        languages.addToItems new Item(name: 'HTML 5', radialCoordinate: 250, angularCoordinate: 275, movement: 'c').save(failOnError: true)
        languages.addToItems new Item(name: 'DSLs', radialCoordinate: 190, angularCoordinate: 340, movement: 'c').save(failOnError: true)
        languages.addToItems new Item(name: 'Groovy', radialCoordinate: 190, angularCoordinate: 280, movement: 'c').save(failOnError: true)
        languages.addToItems new Item(name: 'C#4', radialCoordinate: 90, angularCoordinate: 355, movement: 'c').save(failOnError: true)
        languages.addToItems new Item(name: 'JRuby', radialCoordinate: 90, angularCoordinate: 330, movement: 'c').save(failOnError: true)
        languages.addToItems new Item(name: 'Javascript as a 1st class language', radialCoordinate: 90, angularCoordinate: 275, movement: 'c').save(failOnError: true)
        languages.addToItems new Item(name: 'Ruby', radialCoordinate: 30, angularCoordinate: 282, movement: 'c').save(failOnError: true)

    }
    def destroy = {
    }
}
