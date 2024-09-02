import 'dart:math';

void main() {
  List<String> quotes = [];

  Random random = Random();
  int index = random.nextInt(quotes.length);

  print("✨ Here's your motivational quote for the day : ✨\n");
  print('"${quotes[index]}"');
}
