"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const scoreButton = document.querySelector("#score-button, .score-button");
    const score = document.querySelector("#score, .score");
    const doubleCard = document.querySelector("#double-card, .double-card");
    const hoverZone = document.querySelector("#hover-zone, .hover-zone");
    const status = document.querySelector("#status, .status");
    
    let points = 0;

    if (scoreButton) {
        scoreButton.addEventListener("click", () => {
            points += 1;
            if (score) {
                score.textContent = points;
            }
            if (status) {
                status.textContent = `Очки увеличены! Текущий счет: ${points}`;
            }
        });
    }

    if (doubleCard) {
        doubleCard.addEventListener("dblclick", () => {
            doubleCard.classList.toggle("is-selected");
            if (status) {
                status.textContent = "Изменен статус карточки (is-selected)";
            }
        });
    }

    if (hoverZone) {
        hoverZone.addEventListener("mouseenter", () => {
            hoverZone.classList.add("is-hovered");
            if (status) {
                status.textContent = "Курсор вошел в зону наведения";
            }
        });

        hoverZone.addEventListener("mouseleave", () => {
            hoverZone.classList.remove("is-hovered");
            if (status) {
                status.textContent = "Курсор покинул зону наведения";
            }
        });
    }
});
