class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getBadgeHtml() {
        if(this.hasBeenLiked) {
            return `
                <div id="badge">
                    <img class="reaction" src="./images/badge-like.png"/>
                </div>`} 
        else {
            return `
                <div id="badge">
                    <img class="reaction" src="./images/badge-nope.png"/>
                </div>` }
    }
    
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    
    getDogHtml() {
        const { name, avatar, age, bio } = this //can you use this this here because you used object.assign above?
        return `
            <div class="feature-suggestion">
                <div class="dog-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="dog-img" src="${avatar}">
            </div>`
    }
}

export default Dog