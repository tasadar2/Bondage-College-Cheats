"use strict";
var cheaterHtml = "<div id=\"cheat\" style=\"display: none; position: fixed; z-index: 1; left: 0px; top: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.4); overflow: auto;\"><div style=\"margin:15% auto;padding:20px;width:60%;background-color:#ffffff;border-radius:8px;\"><h4 style=\"margin-top: 0px; text-align: center;\">Cheat Menu</h4><div style=\"display: flex;justify-content: space-between\"><fieldset style=\"width: 50%\"><legend>Conversation</legend><div><img src=\"Icons/Heart.png\" /><button onclick=\"ActorChangeAttitude(1, 0);\"><img src=\"Icons/Navigation/ArrowUpInactive.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"ActorChangeAttitude(-1, 0);\"><img src=\"Icons/Navigation/ArrowDownInactive.png\" style=\"width: 32px; height: 32px;\"></button></div><div><img src=\"Icons/Submission.png\" /><button onclick=\"ActorChangeAttitude(0, 1);\"><img src=\"Icons/Navigation/ArrowUpInactive.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"ActorChangeAttitude(0, -1);\"><img src=\"Icons/Navigation/ArrowDownInactive.png\" style=\"width: 32px; height: 32px;\"></button></div></fieldset><fieldset style=\"width: 50%\"><legend>Inventory</legend><button onclick=\"PlayerAddInventory('Armbinder', 1)\"><img src=\"Icons/Armbinder_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('BallGag', 1)\"><img src=\"Icons/BallGag_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('Blindfold', 1)\"><img src=\"Icons/Blindfold_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('ButtPlug', 1)\"><img src=\"Icons/ButtPlug_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('ChastityBelt', 1)\"><img src=\"Icons/ChastityBelt_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('ClothGag', 1)\"><img src=\"Icons/ClothGag_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('Collar', 1)\"><img src=\"Icons/Collar_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('Crop', 1)\"><img src=\"Icons/Crop_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('Cuffs', 1)\"><img src=\"Icons/Cuffs_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('CuffsKey', 1)\"><img src=\"Icons/CuffsKey_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('DoubleOpenGag', 1)\"><img src=\"Icons/DoubleOpenGag_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('PantieGag', 1)\"><img src=\"Icons/PantieGag_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('Rope', 1)\"><img src=\"Icons/Rope_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('SleepingPill', 1)\"><img src=\"Icons/SleepingPill_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('SockGag', 1)\"><img src=\"Icons/SockGag_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('TapeGag', 1)\"><img src=\"Icons/TapeGag_Active.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"PlayerAddInventory('VibratingEgg', 1)\"><img src=\"Icons/VibratingEgg_Active.png\" style=\"width: 32px; height: 32px;\"></button></fieldset></div><div style=\"display: flex;justify-content: space-between\"><fieldset style=\"width: 50%\"><legend>Time</legend><div><img src=\"Icons/Wait_Active.png\" style=\"width: 32px; height: 32px;\" /><button onclick=\"CurrentTime+=600000\"><img src=\"Icons/Navigation/ArrowUpInactive.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"CurrentTime-=600000\"><img src=\"Icons/Navigation/ArrowDownInactive.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"CurrentTime=LimitTimer\"><img src=\"Icons/Leave_Inactive.png\" style=\"width: 32px; height: 32px;\"></button><button onclick=\"if(RunTimer) StopTimer(CurrentTime); else StartTimer(LimitTimer, LimitChapter, LimitScreen)\"><img src=\"Icons/Wait_Inactive.png\" style=\"width: 32px; height: 32px;\"></button></div></fieldset></div></div></div>";
var Cheat = /** @class */ (function () {
    function Cheat() {
        var _this = this;
        window.addEventListener("load", function () { return _this.init(); });
        if (document.readyState === "complete") {
            this.init();
        }
    }
    Cheat.prototype.init = function () {
        var _this = this;
        this.injectWindow();
        document.addEventListener("keypress", function (e) {
            if (e.key === "c") {
                var modal = document.getElementById("cheat");
                _this.toggle(modal);
            }
        });
    };
    Cheat.prototype.toggle = function (element) {
        if (element) {
            if (element.style.display === "none") {
                this.show(element);
            }
            else {
                this.hide(element);
            }
        }
    };
    Cheat.prototype.show = function (element) {
        if (element) {
            element.style.display = "block";
        }
    };
    Cheat.prototype.hide = function (element) {
        if (element) {
            element.style.display = "none";
        }
    };
    Cheat.prototype.injectWindow = function () {
        var temp = document.createElement("div");
        temp.innerHTML = cheaterHtml;
        for (var childKey in temp.children) {
            if (temp.children.hasOwnProperty(childKey)) {
                document.body.appendChild(temp.children[childKey]);
            }
        }
    };
    return Cheat;
}());
var cheat = new Cheat();
