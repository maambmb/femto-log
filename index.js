class Logger {

    constructor( ctx ) {
        this.ctx = ctx || null;
    }

    info( msg ) {
        console.log( this.log( "INFO", msg ) );
    }

    warn( msg ) {
        console.log( this.log( "WARN", msg ) );
    }

    error( msg ) {
        console.log( this.log( "ERROR", msg ) );
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
