
#include <string>

class Test;
class TestResult;

/*! \brief Protector context (Implementation).
 * Implementation detail.
 * \internal Context use to report failure in Protector.
 */
class ProtectorContext
{
public:
  ProtectorContext( Test *test,
                    TestResult *result,
                    const std::string &shortDescription )
      : m_test( test )
      , m_result( result )
      , m_shortDescription( shortDescription )
  {
  }

private:
  /// disable copy construction
  ProtectorContext( const ProtectorContext& );
  /// disable assignment
  ProtectorContext& operator=(const ProtectorContext&);

public:
  Test *m_test;
  TestResult *m_result;
  std::string m_shortDescription;
};
