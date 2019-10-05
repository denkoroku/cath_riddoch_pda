require ('minitest/autorun')
require ('minitest/rg')
require_relative ('card_game')
require_relative ('card')

class TestCardGame < MiniTest::Test

  def setup()
    @game1 = CardGame.new(@card1, @card2)
    @card1 = Card.new("clubs", 5)
    @card2 = Card.new("spades", 1)
    @cards = [@card1, @card2]
  end

  def test_setup
    assert_equal("clubs", @card1.suit)
    assert_equal(5, @card1.value)
  end

  def test_check_for_ace__false
    assert_equal(false,@game1.check_for_ace(@card1))
  end

  def test_check_for_ace__true
    assert_equal(true, @game1.check_for_ace(@card2))
  end

  def test_highest_card
    result= @game1.highest_card(@card1, @card2).value
    assert_equal(5, result)
  end

  def test_cards_total
    assert_equal("You have a total of 6", @game1.cards_total(@cards))
  end

end
