class CardGame

  def initialize(card1, card2)
    @card1 = card1
    @card2 = card2
  end

  def check_for_ace(card)
    if card.value == 1
      return true
    else
      return false
    end
  end

  def highest_card(card1, card2)
    if card1.value > card2.value
      return card1
    else
      return card2
    end
  end


  def cards_total(cards)
    total=0
    for card in cards
      total += card.value
    end
      return "You have a total of " + total.to_s
  end
end
