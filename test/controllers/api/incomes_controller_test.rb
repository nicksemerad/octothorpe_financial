require 'test_helper'

class Api::IncomesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_incomes_index_url
    assert_response :success
  end

  test "should get show" do
    get api_incomes_show_url
    assert_response :success
  end

  test "should get new" do
    get api_incomes_new_url
    assert_response :success
  end

  test "should get edit" do
    get api_incomes_edit_url
    assert_response :success
  end

end
