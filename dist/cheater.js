"use strict";
var cheaterHtml = "<div id=\"cheat\" style=\"display: none; position: fixed; z-index: 1; left: 0px; top: 0px; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.4); overflow: auto;\"><div style=\"margin:15% auto;padding:20px;width:60%;background-color:#ffffff;border-radius:8px;\"><div style=\"display: flex;justify-content: space-between;\"><h4 style=\"margin-top: 0px;\">Cheat Menu</h4><button onclick=\"document.getElementById('cheat').style.display='none'\">Close</button></div><div style=\"display: flex;justify-content: space-between\"><fieldset style=\"width: 45%\"><legend>Conversation</legend><div><img src=\"Icons/Heart.png\" /><button title=\"Add Love\" onclick=\"ActorChangeAttitude(1, 0);\"><img src=\"Icons/Navigation/ArrowUpInactive.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add Hate\" onclick=\"ActorChangeAttitude(-1, 0);\"><img src=\"Icons/Navigation/ArrowDownInactive.png\" style=\"width: 32px; height: 32px;\"></button></div><div><img src=\"Icons/Submission.png\" /><button title=\"Add Dominance\" onclick=\"ActorChangeAttitude(0, 1);\"><img src=\"Icons/Navigation/ArrowUpInactive.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add Submission\" onclick=\"ActorChangeAttitude(0, -1);\"><img src=\"Icons/Navigation/ArrowDownInactive.png\" style=\"width: 32px; height: 32px;\"></button></div></fieldset><fieldset style=\"width: 45%\"><legend>Inventory</legend><button title=\"Add Armbinder\" onclick=\"PlayerAddInventory('Armbinder', 1)\"><img src=\"Icons/Armbinder_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add BallGag\" onclick=\"PlayerAddInventory('BallGag', 1)\"><img src=\"Icons/BallGag_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add Blindfold\" onclick=\"PlayerAddInventory('Blindfold', 1)\"><img src=\"Icons/Blindfold_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add ButtPlug\" onclick=\"PlayerAddInventory('ButtPlug', 1)\"><img src=\"Icons/ButtPlug_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add ChastityBelt\" onclick=\"PlayerAddInventory('ChastityBelt', 1)\"><img src=\"Icons/ChastityBelt_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add ClothGag\" onclick=\"PlayerAddInventory('ClothGag', 1)\"><img src=\"Icons/ClothGag_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add Collar\" onclick=\"PlayerAddInventory('Collar', 1)\"><img src=\"Icons/Collar_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add Crop\" onclick=\"PlayerAddInventory('Crop', 1)\"><img src=\"Icons/Crop_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add Cuffs\" onclick=\"PlayerAddInventory('Cuffs', 1)\"><img src=\"Icons/Cuffs_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add CuffsKey\" onclick=\"PlayerAddInventory('CuffsKey', 1)\"><img src=\"Icons/CuffsKey_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add DoubleOpenGag\" onclick=\"PlayerAddInventory('DoubleOpenGag', 1)\"><img src=\"Icons/DoubleOpenGag_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add PantieGag\" onclick=\"PlayerAddInventory('PantieGag', 1)\"><img src=\"Icons/PantieGag_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add Rope\" onclick=\"PlayerAddInventory('Rope', 1)\"><img src=\"Icons/Rope_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add SleepingPill\" onclick=\"PlayerAddInventory('SleepingPill', 1)\"><img src=\"Icons/SleepingPill_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add SockGag\" onclick=\"PlayerAddInventory('SockGag', 1)\"><img src=\"Icons/SockGag_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add TapeGag\" onclick=\"PlayerAddInventory('TapeGag', 1)\"><img src=\"Icons/TapeGag_Active.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Add VibratingEgg\" onclick=\"PlayerAddInventory('VibratingEgg', 1)\"><img src=\"Icons/VibratingEgg_Active.png\" style=\"width: 32px; height: 32px;\"></button></fieldset></div><div style=\"display: flex;justify-content: space-between\"><fieldset style=\"width: 45%\"><legend>Time</legend><div><img src=\"Icons/Wait_Active.png\" style=\"width: 32px; height: 32px;\" /><button title=\"Add 10 Minutes\" onclick=\"CurrentTime+=600000\"><img src=\"Icons/Navigation/ArrowUpInactive.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Subtract 10 Minutes\" onclick=\"CurrentTime-=600000\"><img src=\"Icons/Navigation/ArrowDownInactive.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Next Event\" onclick=\"CurrentTime=LimitTimer\"><img src=\"Icons/Leave_Inactive.png\" style=\"width: 32px; height: 32px;\"></button><button title=\"Pause/Resume\" onclick=\"if(RunTimer) StopTimer(CurrentTime); else StartTimer(LimitTimer, LimitChapter, LimitScreen)\"><img src=\"Icons/Wait_Inactive.png\" style=\"width: 32px; height: 32px;\"></button></div></fieldset><fieldset style=\"width: 45%\"><legend>Skill</legend><div><button title=\"Add Arts\" onclick=\"PlayerAddSkill('Arts', 1)\">Arts</button><button title=\"Add Fighting\" onclick=\"PlayerAddSkill('Fighting', 1)\">Fighting</button><button title=\"Add RopeMastery\" onclick=\"PlayerAddSkill('RopeMastery', 1)\">RopeMastery</button><button title=\"Add Sports\" onclick=\"PlayerAddSkill('Sports', 1)\">Sports</button><button title=\"Add Seduction\" onclick=\"PlayerAddSkill('Seduction', 1)\">Seduction</button></div></fieldset></div></div></div>";
var Cheat = /** @class */ (function () {
    function Cheat() {
        var _this = this;
        this.lastClockClick = 0;
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
        var mainCanvas = document.getElementById("MainCanvas");
        if (mainCanvas) {
            mainCanvas.addEventListener("click", function (e) {
                // Clock icon
                if (e.offsetX > 990 && e.offsetX < 1060 &&
                    e.offsetY > 605 && e.offsetY < 675) {
                    var now = Date.now();
                    if (now - _this.lastClockClick < 1000) {
                        var modal = document.getElementById("cheat");
                        _this.toggle(modal);
                        _this.lastClockClick = 0;
                    }
                    else {
                        _this.lastClockClick = now;
                    }
                }
            });
        }
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
