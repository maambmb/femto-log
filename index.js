class Logger {

    constructor( fmtter ) {
        this.fmtter = fmtter || null;
    }

    info( action, ctx ) {
        console.log( JSON.stringify( this.log( "INFO", ctx ) ) );
    }

    warn( action, ctx ) {
        console.log( JSON.stringify( this.log( "WARN", ctx ) ) );
    }

    error( action, ctx ) {
        console.log( JSON.stringify( this.log( "ERROR", ctx ) ) );
    }

    fatal( action, ctx ) {
        console.log( JSON.stringify( this.log( "FATAL", ctx ) ) );
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
