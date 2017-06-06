class Logger {

    constructor( fmtter ) {
        this.fmtter = fmtter || null;
    }

    info( ctx ) {
        console.log( JSON.stringify( this.log( "INFO", ctx ) ) );
    }

    warn( ctx ) {
        console.log( JSON.stringify( this.log( "WARN", ctx ) ) );
    }

    error( ctx ) {
        console.log( JSON.stringify( this.log( "ERROR", ctx ) ) );
    }

    fatal( ctx ) {
        console.log( JSON.stringify( this.log( "FATAL", ctx ) ) );
    }

    log( level, ctx )  {

        if( this.fmtter )
            return this.fmtter( level, ctx );

        return {
            level : level,
            ctx   : ctx,
            ts    : new Date().getTime(),
        };
    }

}

module.exports = (fmtter) => new Logger( fmtter );
