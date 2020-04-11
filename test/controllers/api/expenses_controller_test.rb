require 'test_helper'

class Api::ExpensesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_expenses_index_url
    assert_response :success
  end

  test "should get show" do
    get api_expenses_show_url
    assert_response :success
  end

  test "should get new" do
    get api_expenses_new_url
    assert_response :success
  end

  test "should get edit" do
    get api_expenses_edit_url
    assert_response :success
  end

end
