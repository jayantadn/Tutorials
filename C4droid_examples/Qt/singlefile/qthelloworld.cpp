#include <QtCore>
#include <QtGui>
 
int main(int argc, char* argv[]) {
    QApplication app(argc, argv);
    QDialog *dialog = new QDialog;
    QLabel *label = new QLabel(dialog);
    label->setText("Hello, world!");
    dialog->show();
    return app.exec();
}

#include <qthelloworld.cpp.moc>