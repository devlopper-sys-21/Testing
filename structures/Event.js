/** @format */

const Discord = require("discord.js");

const Client = require("./Client.js");

/**
 * @template {keyof Discord.ClientEvents} k
 * @param {Client} client 
 * @param {Discord.ClientEvents[k]} eventArgs 
 */
function RunFunction(client, ...eventArgs) {}

/**
 * @template {keyof Discord.ClientEvents} k
 */
class Event {
	/**
	 * @param {K} event
	 * @param {RunFunction<K>} runFunction
	 */
    constructor(event, runFunction) {
        this.event = event;
        this.run = runFunction ;
    }
}

module.exports = Event;