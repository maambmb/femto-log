class Logger {

    constructor( fmtter ) {
        this.fmtter = fmtter || null;
    }

    info( action, ctx ) {
        console.log( JSON.stringify( this.log( "INFO", action, ctx ) ) );
    }

    warn( action, ctx ) {
        console.log( JSON.stringify( this.log( "WARN", action, ctx ) ) );
    }

    error( action, ctx ) {
        console.log( JSON.stringify( this.log( "ERROR", action, ctx ) ) );
    }

    fatal( action, ctx ) {
        console.log( JSON.stringify( this.log( "FATAL", action, ctx ) ) );
    }

    log( level, action, ctx )  {

        if( this.fmtter )
            return this.fmtter( level, action, ctx );

        return {
            level  : level,
            ctx    : ctx || undefined,
            action : action,
            ts     : new Date().getTime(),
        };
    }

}

module.exports = (fmtter) => new Logger( fmtter );
