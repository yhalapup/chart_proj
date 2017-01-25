require "rails_helper"
require 'tempfile'

RSpec.describe CSVParser, type: :model do
  let(:path) { "public/session_history.csv" }
  subject { CSVParser.new(path) }
  let(:data) { subject.instance_variable_get("@csv_data") }

  it "included CsvParserHelper" do
    sleep(5)
    expect(subject).to be_a(CsvParserHelper)
  end
end

