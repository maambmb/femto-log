class Logger {

    constructor( ctx ) {
        this.ctx = ctx || null;
    }

    info( msg ) {
        console.log( this.log( "INFO", msg ) );
    }

    alert( msg ) {
        console.log( this.log( "ALERT", msg ) );
    }

    success( msg ) {
        console.log( this.log( "SUCCESS", msg ) );
    }

    warn( msg ) {
        console.log( this.log( "WARN", msg ) );
    }

    error( msg ) {
        console.log( this.log( "ERROR", msg ) );
    }

    fatal( msg ) {
        console.log( this.log( "FATAL", msg ) );
    }

    log( level, msg )  {

        return JSON.stringify( {
            level : level,
            msg   : msg,
            ctx   : this.ctx || undefined,
            ts    : new Date().getTime(),
        } );
    } 

}

module.exports = { 
    default : new Logger(),
    Logger  : Logger
};
