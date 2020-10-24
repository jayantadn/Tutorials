#ifndef	_CPP_VISITOR_EGG_HPP_
#define _CPP_VISITOR_EGG_HPP_


class Egg : public Ingredient {

	public: explicit Egg( float amount = 1.0f ) : 
		Ingredient( amount ) {
	}
	public: void accept( Visitor* visitor ) { assert( visitor );
		return visitor->visit( this );
	}
	public: float getCalories() const {
		return 54.0f;
	};
	public: float getCarbs() const {
		return 0.3f;
	};
	public: float getProtien() const {
		return 4.7f;
	}
	public: float getFat() const {
		return 3.7f;
	}
	public: float getCholesterol() const {
		return 0.156f;
	}
	public: float getSodium() const {
		return 0.052f;
	}
	public: bool isVegetarian() const {
		return true;
	}
	public: std::string toString() const {
		std::stringstream result;
		result << "Egg(" << _amount << ")";
		return result.str();
	}
};

#endif