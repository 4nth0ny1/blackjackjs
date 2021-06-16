player signs in
player starts with $1000 (stored in db)
player locks in bet and that amount is deducted from the player bank. 
player hit deal button
    Deal => dealer gets 1 card and player gets 2 cards 
player can either hit or stand 
    +BLACKJACK: if the player gets 21 on first 2 cards then the player automatically wins 
        Bet times 2 gets inserted in the player bank. 
    +LOSS: if player busts, the player loses 
        The Bet is deducted from the the player bank. 
    +STAND: if the player stands, the dealer gets to hit until he beats the player score, stays on 17, or  busts. if the player wins, the bet times 2 gets added to player bank. if there is a push, then the bet is returned to the player bank. if the dealer wins, then the player loses their bet. 