class CardGame

  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  #Typo in 'def' 
  if card1.value > card2.value
    return card
    #Variable card isn't defined, probably supposed to be card1
  else
    return card2
  end

end
end
#Unneeded end statement

def self.cards_total(cards)
  total
  #variable not declared properly
  #likely supposed to be 'total = 0'
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end
