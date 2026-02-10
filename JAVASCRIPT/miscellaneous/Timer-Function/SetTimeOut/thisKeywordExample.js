
const object={
    msg:"hello world",
    logmessage()
    {
        console.log(this.msg);
    }
};
setTimeout(object.logmessage,1000);
