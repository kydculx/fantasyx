import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Fantasy X',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Fantasy X'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final List<String> _products =
      List.generate(10, (index) => "Card ${index.toString()}");

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: SizedBox(width: 200, child: renderList()),
    );
  }

  Widget renderList() {
    return ReorderableListView.builder(
      itemCount: _products.length,
      itemBuilder: (context, index) {
        final String productName = _products[index];

        return Card(
          key: ValueKey(productName),
          color: Colors.amberAccent,
          elevation: 10,
          margin: const EdgeInsets.all(10),
          child: ListTile(
            contentPadding: const EdgeInsets.all(25),
            title: Text(
              productName,
              style: const TextStyle(fontSize: 18),
            ),
            // trailing: const Icon(Icons.drag_handle),
            onTap: () {},
          ),
        );
      },
      onReorder: (oldIndex, newIndex) {
        setState(() {
          if (newIndex > oldIndex) {
            newIndex = newIndex - 1;
          }
          final element = _products.removeAt(oldIndex);
          _products.insert(newIndex, element);
        });
      },
    );
  }
}
