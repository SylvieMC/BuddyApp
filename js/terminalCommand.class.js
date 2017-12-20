class TerminalCommand {
    constructor(gameId,difficulty,inputId,consoleId,commandList) {
        this.gameId = gameId;
        this.difficulty = difficulty;
        this.inputId = inputId;
        this.consoleId = consoleId;
        this.command = "";
        this.commandList = commandList;
    }
    writeCommand(command) {
        this.command = command;
    }
    completeCommand(commandAfter) {
        this.command += commandAfter;
    }
    verifyCommand() {
        var returnMessage = "";
        var commandUsed = false;
        if(this.command === "") {
            //Veuillez rentrer une commande
            returnMessage = "Vous n'avez pas écrit de commande";
        }
        switch(this.gameId) {
            case 1:
                for (var i = commandList.length - 1; i >= 0; i--) {
                    if(this.command.startsWith(commandList[i][0])) {
                        if (this.command.match(commandList[i][1])) {
                            returnMessage = "Le placement a été effectué";
                            commandUsed = this.command.substring(this.command.lastIndexOf("(")+1,this.command.lastIndexOf(")"));
                            commandUsed = [commandList[i][0],this.command.split(",")];
                            /*for (var i = commandUsed[1].length - 1; i >= 0; i--) {
                                if (Number(commandUsed[1][i])) {
                                    commandUsed[1][i] = Number(commandUsed[1][i]);
                                }
                            }*/
                        }
                        else {
                            returnMessage = "Les arguments de la commande setPlacement ne sont pas valide, vérifiez votre commande à l'aide de l'astuce à droite";
                        }
                    }
                    else {
                        returnMessage = "La commande n'existe pas"
                    }
                }
        }
        if (returnMessage == "") {
            returnMessage = "Une erreur est survenu"
        }
        if (commandUsed == false) {
            return [returnMessage,false];
        }
        return [returnMessage,true,[commandUsed[0],commandUsed[1]]];
    }
}