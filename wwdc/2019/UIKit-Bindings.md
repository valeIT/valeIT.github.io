---
layout: page
title: UIKit Bindings
---
# UIKit Bindings

{% include_relative BeforeEachFile.md %}

The problem with the old behaviour is that there is no single source of truth

The UI has internally its source of truth and the model has its own source of truthand the programmer needs to take care of it manually

You can now call apply() instead of reloadbatchdata that has been removed.

It doesnt use indexpath for updates, but intentifiers.

Uses:

UICollectionViewDiffableDataSource
UITableViewDiffableDataSource
NSCollectionViewDiffableDataSource
NSDiffableDataSource

1. Create snapshow
2. Populate snapshow with the changes
3. Apply the snapshot to roll it out to  the UI

How to do it:

```
struct Model:Hashable{
  let identifier = UUID()
  func hash(into hasher:inout Hasher){
    hasher.combine(identifier)
  }
}

class ViewController: UICollectionViewController{
enum Section:CaseIterable{//enum automatically hashable
  case main
}
var dataSource: UICollectionViewDiffableDataSource<Section, ViewController.Model>!
function search(filter: String){
  let model = myModel.filter(with: filter).sorted{...}
  let snap = NSDiffableDataSource<Section, ViewController.Model>()
  snap.appendSections([.main])//section identifier
  snap.appendItems(model)
  dataSource.apply(snap,animatingDifferences:true)
}
//...
}
```

Be wary that your model needs to  be hashable.

How to setup  the datasource:

```
dataSource= UICollectionViewDiffableDataSource<Section,ViewController.Model>(collectionView:collectionView){(collectionView:UICollectionView,indexPath:IndexPath,model:Model)->UICollectionViewCell? in
  guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: MyCell.reuseIdentifier,for:indexPath) as? MyCell else {
    fatalError("Wrong cell")
  }
  cell.mainlabel.text = model. title
  return cell
}
```

If we work with multiple sections we can continue to append items and sections before calling apply:

```
  let model = myModel.filter(with: filter).sorted{...}
  let snap = NSDiffableDataSource<Section, ViewController.Model>()
  snap.appendSections([.main])
  snap.appendItems(model,toSection:.main)
  dataSource.apply(snap,animatingDifferences:true)

    let bottom = bottomModel.filter(with: filter).sorted{...}
  let snap = NSDiffableDataSource<Section, ViewController.Model>()
  snap.appendSections([.bottom])
  snap.appendItems(bottom, toSection:.bottom)
  dataSource.apply(snap,animatingDifferences:true)
```

Remember to add all the sections to the enum.

You can also retrieve a snapshot foir the current state by calling dataSource.snapshot(), it returns a copy of the snapshot.

**Everything is not identifier based and no longer IndexPath based.**

You can get an indentifier from an IndexPath if you get your item from an IndexPath based API by using `dataSource.itemIdentifier(for: indexPath)`

Can call apply from a background queue.Be wary not to switch and match though. Either only call it from a background queue or only from the main queue.