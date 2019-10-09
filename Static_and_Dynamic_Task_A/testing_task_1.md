### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame

#badly named method should be check_for_ace but will work
  def checkforAce(card)
  #  if card.value = 1    needs  == to compare          
      return true
    else
      return false
    end
  end

  ##dif highest_card(card1 card2) should be def and comma missing.
  if card1.value > card2.value
  #  return card     should be return card1
  else
    return card2
  end
end
#end        end in wrong place

def self.cards_total(cards)
  #total                        need to set total=0
  for card in cards
    total += card.value
    return "You have a total of" + total
  #end                           return should be outside the for loop.
end
```
