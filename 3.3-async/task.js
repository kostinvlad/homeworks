class AlarmClock {
    constructor() {
        this.alarmCollection = [],
        this.timerId = null,
        this.callback = () => console.log('!!!ALARM!!!')
        
    }

    addClock(hhmm, callback, ID) {
        if(!ID){
            console.error('ID not defined')
            return
        }
        else if(this.alarmCollection.find(element => element.id === ID)){
            console.error('An alarm with this ID already exists')
            return
        }
        // Function code
        else {
            this.alarmCollection.push({
            id: ID,
            callback: callback, 
            time: hhmm,            
        })
    }
    }

    removeClock(id) {        
        this.alarmCollection = this.alarmCollection.filter(/* filter */)
    }

    getCurrentFormattedTime() {
        let date = new Date();
        let hm = date.toLocaleTimeString().slice(0,-3);
        return hm;
    }

    start() {
        let checkClock = (item) => {     
            const start = new Date();
            console.log(start)       
            if(item.time === this.getCurrentFormattedTime() ){                
                this.callback()
            };
        }
            if(this.timerId === null){                
               const timer = setInterval(() => {

                    this.alarmCollection.map((item) => checkClock(item))
                    }, 2000)

                this.timerId = timer
                console.log(this.timerId);
            }        
    }

    stop() {
        if(this.timerId !== null){
            clearInterval(this.timerId)
            this.timerId = null
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(`Будильник: ${item.id}, Время-${item.time}`))
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = []
    }

}

const alarmClock = new AlarmClock();

alarmClock.addClock("03:13", this.callback, 1);

