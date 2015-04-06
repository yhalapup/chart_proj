class ChartController < ApplicationController
  def index
    parser = CSVParser.new("public/session_history.csv")
    @data = parser.result_hash.to_json
  end
end
