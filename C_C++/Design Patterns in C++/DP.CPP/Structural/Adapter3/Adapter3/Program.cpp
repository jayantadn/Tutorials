#include<iostream>
#include<string>

using namespace std;

//The 'Target' class
class Compound
{
	public:
	Compound(string chemical):chemical_(chemical){}
	virtual ~Compound() {};
	void Display()
	{
	cout << "\nCompound: " << chemical_ << "----------------" << endl;
	}
	protected:
	string chemical_;
	float boilingPoint_;
	float meltingPoint_;
	double molecularWeight_;
	string molecularFormula_;
	private:
	Compound(); //disallow default constructor
};

//The 'Adaptee' class
class ChemicalDatabank
{
	public:
	virtual ~ChemicalDatabank() {};
	//The databank 'legacy API'
	float GetCriticalPoint(string compound, string point)
	{
	string lowerCompound = toLowerString(compound);
	//Melting Point
	if (point == "M")
	{
	if(_stricmp(lowerCompound.c_str(), "water") == 0)
	return 0.0;
	else if(_stricmp(lowerCompound.c_str(), "benzene") == 0)
	return 5.5;
	else if(_stricmp(lowerCompound.c_str(), "ethanol") == 0)
	return (float) -114.1;
	else
	return 0.0;
	}
	//Boiling point
	else
	{
	if(_stricmp(lowerCompound.c_str(), "water") == 0)
	return (float) 100.0;
	else if(_stricmp(lowerCompound.c_str(), "benzene") == 0)
	return (float) 80.1;
	else if(_stricmp(lowerCompound.c_str(), "ethanol") == 0)
	return (float) 78.3;
	else
	return 0.0;
	
}
}

string GetMolecularStructure(string compound)
{
	string lowerCompound = toLowerString(compound);

	if(_stricmp(lowerCompound.c_str(), "water") == 0)
	return "H2O";
	else if(_stricmp(lowerCompound.c_str(), "benzene") == 0)
	return "C6H6";
	else if(_stricmp(lowerCompound.c_str(), "ethanol") == 0)
	return "C2H5OH";
	else
	return "";
}

double GetMolecularWeight(string compound)
{
	string lowerCompound = toLowerString(compound);

	if(_stricmp(lowerCompound.c_str(), "water") == 0)
	return 18.015;
	else if(_stricmp(lowerCompound.c_str(), "benzene") == 0)
	return 78.1134;
	else if(_stricmp(lowerCompound.c_str(), "ethanol") == 0)
	return 46.0688;
	else
	return 0.0;
}
private:
//Helper function
string toLowerString(string& input)
{ 
	int length = input.length(); 
	string output; 
	for(int i = 0; i < length; i++) 
	{ 
	output += tolower(input[i]); 
	} 
	return output;
	}
};

//The 'Adapter' class
class RichCompound : public Compound
{
public:
	RichCompound(string name) : Compound(name)
	{
		bank_ = new ChemicalDatabank();
	}
	virtual ~RichCompound()
	{
		delete bank_;
	}
void Display()
{
	boilingPoint_ = bank_->GetCriticalPoint(chemical_, "B");
	meltingPoint_ = bank_->GetCriticalPoint(chemical_, "M");
	molecularWeight_ = bank_->GetMolecularWeight(chemical_);
	molecularFormula_ = bank_->GetMolecularStructure(chemical_);

	Compound::Display();
	cout << " Formula : " << molecularFormula_ << endl;
	cout << " Weight : " << molecularWeight_ << endl;
	cout << " Melting Pt : " << meltingPoint_ << endl;
	cout << " Boiling Pt : " << boilingPoint_ << endl;
	}
	private:
	ChemicalDatabank* bank_;
	RichCompound(); //dis-allow default constructor
};

int main()
{
	Compound unknown("Unknown");
	unknown.Display();

	RichCompound water("Water");
	water.Display();

	RichCompound benzene("Benzene");
	benzene.Display();

	RichCompound ethanol("Ethanol");
	ethanol.Display();

	RichCompound obj("Test");
	obj.Display();

	return 0;
}


